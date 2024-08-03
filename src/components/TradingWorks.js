import React from 'react'
import Swap from './Swap';
import LimitOrder from './LimitOrder';
import DCA from './DCA';

function TradingWorks({selectedType, isConnected}) {

    let layout = <div></div>

    if(selectedType===0) {
        layout = <div>
            <Swap isConnected={isConnected}/>
        </div>
    } else if(selectedType===1) {
        layout = <div>
            <LimitOrder/>
        </div>
    } else {
        layout = <div>
            <DCA/>
        </div>
    }

  return (
    <div>
        <div style={{ marginLeft: '4%', marginRight: '4%', marginTop:"20px", backgroundColor: '#594a36', borderRadius:"10px" }}>
            {layout}
        </div>
    </div>
  )
}

export default TradingWorks
