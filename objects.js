var playlist = {artist: "songTitle"}

function updatePlaylist(playlist, artistName, songTitle) {
  console.log(playlist)
  return playlist.artistName = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
