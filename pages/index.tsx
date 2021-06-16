import { Htag, Button, P, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">qqqq</Htag>
      <Htag tag="h2">qqqq</Htag>
      <Htag tag="h3">qqqq</Htag>
      <Button appearance="primary" arrow="right">
        xxxxx
      </Button>
      <Button appearance="ghost" arrow="down">
        xxxxx
      </Button>
      <P size="l">qweqweqe qweqwe qweqweqe qweqweqweqwe</P>
      <P size="m">qweqweqe qweqwe qweqweqe qweqweqweqwe</P>
      <P size="s">qweqweqe qweqwe qweqweqe qweqweqweqwe</P>

      <Tag size='s' color="primary">ssssss</Tag>
      <Tag size='m' color="green">ssssss</Tag>
    </>
  );
}
