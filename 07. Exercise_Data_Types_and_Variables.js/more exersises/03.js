function cone(coneRadius, coneHeight) {
  let conesVolume = (1 / 3) * Math.PI * coneRadius ** 2 * coneHeight;
  let slant = Math.sqrt(coneRadius ** 2 + coneHeight ** 2);
  let conesArea = Math.PI * coneRadius ** 2 + Math.PI * coneRadius * slant;

  console.log(`volume = ${conesVolume.toFixed(4)}`);
  console.log(`area = ${conesArea.toFixed(4)}`);
}
