/* 

time: O(n) | space: O(n)

*/
function sunsetViews(buildings, direction) {
  console.log('buildings', buildings)
  if (!buildings.length) return [];
  const EAST = "EAST";
  const WEST = "WEST";
  const startIndex = direction === WEST ? 0 : buildings.length -1;
  const step = direction === WEST ? 1 : -1;
  const buildingsWithSunsetViews = [startIndex];
  let idx = startIndex;
  
  while (idx >= 0 && idx < buildings.length) {
    const currentBuilding = buildings[idx];
    const currentTallestBuildingIdx = buildingsWithSunsetViews[buildingsWithSunsetViews.length -1];
    const currentTallestBuilding = buildings[currentTallestBuildingIdx];
    if (currentBuilding > currentTallestBuilding) buildingsWithSunsetViews.push(idx);
    idx = idx + step;
  }

  if (direction === EAST) return buildingsWithSunsetViews.reverse();
  return buildingsWithSunsetViews
  
}

module.exports = sunsetViews;