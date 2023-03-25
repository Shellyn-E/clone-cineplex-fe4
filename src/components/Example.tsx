import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Example = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-10 m-20">
      {data?.map((item, index) => (
        <Card key={index}>
          <Card.Section>
            <Image src={item.src} height={426} width={290} alt="Norway" />
          </Card.Section>

          <Text weight={500} size={19} text-align="center">
            {item.name}
          </Text>

          <Badge color="red" variant="light" mt="md" radius="md">
            {item.umurD}
          </Badge>

          <Badge color="blue" variant="light" mt="md" radius="md">
            {item.umurR}
          </Badge>

          <Badge color="green" variant="light" mt="md" radius="md">
            {item.umurSU}
          </Badge>
        </Card>
      ))}
    </div>
  );
};

export default Example;
