var playlist = {artist: "songTitle"}

function updatePlaylist(list, artist, song) {
  list.artist = song
  console.log(list)
  return list
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
}
