import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Example = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-10 mx-20">
      {data?.map((item, index) => (
        <Card key={index}>
          <Card.Section>
            <Image src={item.src} height={426} width={290} alt="Norway" />
          </Card.Section>

          <Text weight={500} size={19} text-align="center">
            {item.name}
          </Text>

          <Image
            src={item.umur}
            height={20}
            width={45}
            alt="umur"
            place-items-center
          />
        </Card>
      ))}
    </div>
  );
};

export default Example;
