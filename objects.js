var playlist = {artist: "songTitle"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  console.log(playlist)
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
