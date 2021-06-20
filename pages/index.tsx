import { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(2);

  return (
    <>
      <Htag tag="h1">qqqq</Htag>
      <Htag tag="h2">qqqq</Htag>
      <Htag tag="h3">qqqq</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        xxxxx
      </Button>
      <Button appearance="ghost" arrow="down">
        xxxxx
      </Button>
      <P size="l">qweqweqe qweqwe qweqweqe qweqweqweqwe</P>
      <P size="m">qweqweqe qweqwe qweqweqe qweqweqweqwe</P>
      <P size="s">qweqweqe qweqwe qweqweqe qweqweqweqwe</P>

      <Tag size="s" color="primary">
        ssssss
      </Tag>
      <Tag size="m" color="green">
        ssssss
      </Tag>
      <h1>{counter}</h1>

      <Rating isEditable={true} rating={counter} setRating={setCounter} />
    </>
  );
}

export default withLayout(Home);
