import React from "react";
import { Card } from "semantic-ui-react";



export default function EpisodeCard(props) {
  return (
    <Card key={props.id}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {`Episode: ${props.episode}`} <br/>
          {`Air Date: ${props.airdate}`}
        </Card.Description>
      </Card.Content>
    </Card>

  )
}