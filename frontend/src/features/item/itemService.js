import axios from 'axios'

const API_URL = '/api/item/'

// Create new goal
const createItem = async (goalData) => {
  const config = {
    headers: {
        "Content-type": "application/json"
    },
  }

  const response = await axios.post(API_URL, goalData,config)

  return response.data
}

// Get user goals
const getItems = async () => {
  const config = {
    headers: {
        "Content-type": "application/json"
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteItem = async (goalId) => {
  const config = {
    headers: {
        "Content-type": "application/json"
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

const itemService = {
  createItem,
  getItems,
  deleteItem,
}

export default itemService
