import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const App: React.FC = () => {  
  return (
    <div>
      <ButtonGroup variant="contained" size="small" aria-label="small contained button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <div>
          this div produces 'fullWidth' error
        </div>        
      </ButtonGroup>      
    </div >
  );
}

export default App;
