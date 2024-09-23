const TestComponent = ({param1, param2}: { param1: string; param2: number; }) => {
  return (
    <div>
      Name: {param1}
      <span className="text-5xl font-bold">{param2}</span>
    </div>
  );
}

export default TestComponent;