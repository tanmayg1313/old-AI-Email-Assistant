import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Typography, Container, Box, TextField, InputLabel, FormControl, Select, MenuItem, Button, CircularProgress } from '@mui/material';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    // setGeneratedReply('');

    try {
      // Simulate an API call to generate a reply
      // const response = await new Promise((resolve) =>
      //   setTimeout(() => resolve({ reply: `Generated reply in a ${tone || 'neutral'} tone.` }), 2000)
      // );
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone 
       });

      // setGeneratedReply(response.reply);
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (err) {
      setError('Failed to generate a reply. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Email Reply Generator
        </Typography>

        <Box sx={{ mx: 3 }}>
          <TextField
            fullWidth
            label="Original email content"
            multiline
            rows={6}
            value={emailContent || ''}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="formal">Formal</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
          </Button>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          {generatedReply && (
            <>
              <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
                <Typography variant="h6">Generated Reply:</Typography>
                <Typography>{generatedReply}</Typography>
              </Box>

              <Button
              variant='outlined'
              sx={{ mt: 2 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}>
                Copy to Clipboard
              </Button>
            </>
          )}
        </Box>
      </Container>
    </>
  );
}

export default App;



// ********************************************************************************************************************



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Typography, Container, Box, TextField, InputLabel, FormControl, Select, MenuItem, Button } from '@mui/material';

// function App() {
//   const [emailContent, setEmailContent] = useState('');
//   const [tone, setTone] = useState('');
//   const [generatedReply, setGeneratedReply] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   return (
//     <>
//       {
//         <Container maxWidth="md" sx = {{py : 4}}>
//           <Typography variant="h4" component="h1" gutterBottom>
//             Email Reply Generator
//           </Typography>

//           <Box sx={{mx:3}}>
//             <TextField
//               fullWidth
//               label="Original email content"
//               multiline
//               rows={6}
//               value={emailContent || ''}
//               onChange={(e) => setEmailContent(e.target.value)}
//               sx = {{mb: 2}}/>
          

//             <FormControl fullWidth sx = {{mb: 2}}>
//               <InputLabel>Tone (Optional)</InputLabel>
//               <Select
//                 value = {tone}
//                 label = {"Tone (Optional)"}
//                 onChange={(e) => setTone(e.target.value)}
//                 sx = {{mb: 2}}>
//                   <MenuItem value = "">None</MenuItem>
//                   <MenuItem value = "formal">Formal</MenuItem>
//                   <MenuItem value = "casual">Casual</MenuItem>
//                   <MenuItem value = "friendly">Friendly</MenuItem>
//                   <MenuItem value = "professional">Professional</MenuItem>
//               </Select>
//             </FormControl>

//             <Button
//               variant='contained'
//               onClick={handleSubmit}
//               disabled={!emailContent || loading}
//               fullWidth>
//               {loading ? <CircularProgress size={24}/> : "Generate Reply"}
//             </Button>
//           </Box>
//         </Container>
//       }
//     </>
//   )
// }

// export default App




