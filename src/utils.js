const validateIndex = (index, res) => {
  if (index < 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Repository not found.'
    })
  }
}

const searchForIndex = (id, repositories) => {
  return repositories.findIndex(repo => repo.id === id)
}

module.exports = { validateIndex, searchForIndex }