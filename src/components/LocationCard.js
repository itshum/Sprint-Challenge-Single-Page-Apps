import React from "react";
import { Card } from "semantic-ui-react";

// export default function LocationCard({ name, type, dimension, residents }) {
//   return <span>todo: location</span>;
// }

export default function LocationCard(props) {
  return (
    <Card key={props.id}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {`${props.type} - ${props.dimension}`}
        </Card.Description>
        <Card.Meta>{props.residents}</Card.Meta>
      </Card.Content>
    </Card>

  )
}