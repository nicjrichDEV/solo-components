import Card from "../../components/card/Card";
import { Moon } from "lucide-react";
import "./CardPage.css";

export default function CardPage() {
  return (
    <Card>
      <div>
        <Moon />
      </div>
      <h2>Test</h2>
      <p>Description</p>
    </Card>
  );
}
