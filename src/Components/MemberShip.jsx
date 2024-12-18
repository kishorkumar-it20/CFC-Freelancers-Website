import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Monthly from "./MemberShip/Monthly";
import Yearly from "./MemberShip/Yearly";
const MemberShip = () => {
    const [alignment, setAlignment] = React.useState('month');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
    return(
        <div>
            <div className="flex justify-center mt-16">
                <h1 className="font-poppins text-3xl mb-10">MemberShip Plans</h1>
            </div>
            <div className="flex justify-center">
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                >
                 <ToggleButton
                        value="month"                     
                    >
                        Billed Monthly
                    </ToggleButton>
                    <ToggleButton
                        value="year"
                       
                        
                    >
                        Billed Yearly
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="flex justify-center mt-8">
                {alignment === 'month' ? <Monthly/> : <Yearly/>}
            </div>
        </div>
    )
}
export default MemberShip;