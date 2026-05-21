function solve(bandName, albumName, songName) {
  let songDuration = (bandName.length*albumName.length) * songName.length/2;

  let songRotations = Math.ceil(songDuration/2.5);
  console.log(`The plate was rotated ${songRotations} times.`)
}

