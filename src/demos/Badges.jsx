import Badge from "../badge/badge";

export default function Badges() {
  return (
    <section
      id="badge"
      className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-2 lg:p-6"
    >
      <h3 className="text-xl font-medium text-text-primary">Badge</h3>
      <div className="flex flex-wrap gap-2">
        <Badge color="red">Badge</Badge>
        <Badge color="orange">Badge</Badge>
        <Badge color="amber">Badge</Badge>
        <Badge color="yellow">Badge</Badge>
        <Badge color="lime">Badge</Badge>
        <Badge color="green">Badge</Badge>
        <Badge color="emerald">Badge</Badge>
        <Badge color="teal">Badge</Badge>
        <Badge color="cyan">Badge</Badge>
        <Badge color="sky">Badge</Badge>
        <Badge color="blue">Badge</Badge>
        <Badge color="indigo">Badge</Badge>
        <Badge color="violet">Badge</Badge>
        <Badge color="purple">Badge</Badge>
        <Badge color="fuchsia">Badge</Badge>
        <Badge color="pink">Badge</Badge>
        <Badge color="rose">Badge</Badge>
        <Badge color="slate">Badge</Badge>
        <Badge color="gray">Badge</Badge>
        <Badge color="zinc">Badge</Badge>
        <Badge>Badge</Badge>
        <Badge color="slate">Badge</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge color="red" shape="pill">
          Badge
        </Badge>
        <Badge color="orange" shape="pill">
          Badge
        </Badge>
        <Badge color="amber" shape="pill">
          Badge
        </Badge>
        <Badge color="yellow" shape="pill">
          Badge
        </Badge>
        <Badge color="lime" shape="pill">
          Badge
        </Badge>
        <Badge color="green" shape="pill">
          Badge
        </Badge>
        <Badge color="emerald" shape="pill">
          Badge
        </Badge>
        <Badge color="teal" shape="pill">
          Badge
        </Badge>
        <Badge color="cyan" shape="pill">
          Badge
        </Badge>
        <Badge color="sky" shape="pill">
          Badge
        </Badge>
        <Badge color="blue" shape="pill">
          Badge
        </Badge>
        <Badge color="indigo" shape="pill">
          Badge
        </Badge>
        <Badge color="violet" shape="pill">
          Badge
        </Badge>
        <Badge color="purple" shape="pill">
          Badge
        </Badge>
        <Badge color="fuchsia" shape="pill">
          Badge
        </Badge>
        <Badge color="pink" shape="pill">
          Badge
        </Badge>
        <Badge color="rose" shape="pill">
          Badge
        </Badge>
        <Badge color="slate" shape="pill">
          Badge
        </Badge>
        <Badge color="gray" shape="pill">
          Badge
        </Badge>
        <Badge color="zinc" shape="pill">
          Badge
        </Badge>
        <Badge shape="pill">Badge</Badge>
        <Badge color="slate" shape="pill">
          Badge
        </Badge>
      </div>
    </section>
  );
}
