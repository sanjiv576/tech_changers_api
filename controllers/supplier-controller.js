const User = require("../models/user");

//For /api/user/info
const getRequests = (req, res, next) => {
  User.find()
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "No user found!" });
      }

      lstRequest = [];
      nonEmptyList = [];
      separateLst = [];
      userRequestList = [];
      filteredList = [];
      finalList = [];

      user.forEach((singleUser) => lstRequest.push(singleUser.waterRequest));

      lstRequest.forEach((lst) => {
        if (lst.length > 0) {
          nonEmptyList.push(lst);
        }
      });

      nonEmptyList.forEach((lst) => {
        lst.forEach((individualLst) => {
          separateLst.push(individualLst);
        });
      });

      separateLst.forEach((lst) => {
        filteredList.push({
          contactNumber: lst.contactNumber,
          price: lst.price,
          accept: lst.accept,
          status: lst.status
        });
      });

      res.json({ data: filteredList });
    })
    .catch(next);
};

module.exports = {
  getRequests,
};
