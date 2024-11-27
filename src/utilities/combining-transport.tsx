export const  combineTransportationData = (transportation, transportationStations) => {
  return transportation.map((journey) => {
    const { Date, From, To, JPY, USD } = journey;

    // Filter related routes from transportationStations
    const relatedRoutes = transportationStations.filter(
      (route) =>
        route.Date === Date &&
        (route.OriginStation.includes(From) || route.DestinationOrTransferStation.includes(To))
    );

    // Combine journey data with its related routes
    return {
      Date,
      From,
      To,
      Details: relatedRoutes.map((route) => ({
        OriginStation: route.OriginStation,
        DestinationOrTransferStation: route.DestinationOrTransferStation,
        LineTaken: route.LineTaken,
        FinalDestination: route.FinalDestination,
      })),
      JPY,
      USD,
    };
  });
}
