import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({title, cases, total}) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          {/*Title*/}
          <Typography className="infoBox__title" color="textSecondary">{title}</Typography>

          {/*Cases*/}
          <h2 className="infoBox__Cases">{cases}</h2>

          {/*Total*/}
          <Typography className="infoBox__total" color="textSecondary">{total}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default InfoBox
