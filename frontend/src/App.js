import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Alert,
} from '@mui/material';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5001/items');
      setItems(response.data.items);
    } catch (err) {
      setError('Failed to fetch items');
    }
  };

  const addItem = async () => {
    if (!name.trim()) {
      setError('Item name cannot be empty');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/items', { name });
      setItems([...items, response.data]);
      setName('');
      setError(null);
    } catch (err) {
      setError('Failed to add item');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Item List
      </Typography>
      {error && (
        <Alert severity="error" style={{ marginBottom: '1rem' }}>
          {error}
        </Alert>
      )}
      <Box component="form" onSubmit={(e) => e.preventDefault()} display="flex" alignItems="center" gap={2} marginBottom={2}>
        <TextField
          label="Item Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addItem}>
          Add Item
        </Button>
      </Box>
      <List>
        {items.map((item) => (
          <ListItem key={item.id} divider>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
