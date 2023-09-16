//For /api/user/info
const getRoutine = (req, res, next) => {
  res.json({
    data: [
      {
        "day": "Sunday",
        "startTime": "8am",
        "endTime": "9am",
        "location": "Kali mahal,inbhal,thamel,jhatya",
        "source": "Tripureshwor"
      },
      {
        "day": "Sunday",
        "startTime": "10am",
        "endTime": "11am",
        "location": "Mahakal",
        "source": "Tripureshwor"
      },
      {
        "day": "Sunday",
        "startTime": "12pm",
        "endTime": "1pm",
        "location": "Mali gau, Hadi gau, Bishala naga",
        "source": "Tripureshwor"
      },
      {
        "day": "Monday",
        "startTime": "8am",
        "endTime": "9am",
        "location": "Nakshal",
        "source": "Tripureshwor"
      },
      {
        "day": "Monday",
        "startTime": "10am",
        "endTime": "11am",
        "location": "Bag bazar",
        "source": "Tripureshwor"
      },
      {
        "day": "Tuesday",
        "startTime": "10am",
        "endTime": "11am",
        "location": "Basantapur",
        "source": "Tripureshwor"
      },
      {
        "day": "Tuesday",
        "startTime": "12pm",
        "endTime": "1pm",
        "location": "Maiti devi",
        "source": "Tripureshwor"
      },
      {
        "day": "Wednesday",
        "startTime": "8am",
        "endTime": "9am",
        "location": "Bhaudha",
        "source": "Tripureshwor"
      },
       {
        "day": "Wednesday",
        "startTime": "10am",
        "endTime": "11am",
        "location": "Mahakal",
        "source": "Tripureshwor"
      },
      {
        "day": "Sunday",
        "startTime": "8am",
        "endTime": "9am",
        "location": "mitraninagar",
        "source": "kritipur"
      },
      {
        "day": "Monday",
        "startTime": "8am",
        "endTime": "9am",
        "location": "salyansthan",
        "source": "kritipur"
      },
      {
        "day": "tuesday",
        "startTime": "10am",
        "endTime": "11am",
        "location": "jhulpokhari",
        "source": "kritipur"
      },
      {
        "day": "Tuesday",
        "startTime": "12pm",
        "endTime": "1pm",
        "location": "machhegaun",
        "source": "tripureshwor"
      },
     
      {
        "day": "Wednesday",
        "startTime": "8am",
        "endTime": "9am",
        "location": "Chobar",
        "source": "kritipur"
      },
       {
        "day": "Wednesday",
        "startTime": "10am",
        "endTime": "11am",
        "location": "Panga",
        "source": "Kritipur"
      }
    ],
  });
};

module.exports = {
  getRoutine,
};
