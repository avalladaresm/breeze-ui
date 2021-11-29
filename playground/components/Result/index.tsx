import Result from "../../../src/components/Result";

export default function PlaygroundResult() {
  return (
    <div className="flex items-center space-x-3 p-5 max-w-7xl bg-white m-2 rounded-md">
      <div className="flex">
        <div className="flex-col space-y-3 items-start">
          <h1 className="flex text-2xl ">Result</h1>
          <div className="flex space-x-3">
            <Result
              title="What is Lorem Ipsum?"
              description="and dis is a desription jejeeje oj oijiojio  i99kl lkjlk popo poo j io lkj iojkjl opolk l ;lkl k ojo"
              type="info"
              withBg={false}
              withBorder={true}
            />
            <Result
              title="Why do we use it?"
              description="and dis is a desription jejeeje oj oijiojio  i99kl lkjlk popo poo j io lkj iojkjl opolk l ;lkl k ojo"
              type="success"
              withBg={false}
              withBorder={true}
            />
          </div>
          <div className="flex space-x-3">
            <Result
              title="Where does it come from?"
              description="and dis is a desription jejeeje oj oijiojio  i99kl lkjlk popo poo j io lkj iojkjl opolk l ;lkl k ojo"
              type="warning"
              withBg={false}
              withBorder={true}
            />
            <Result
              title="Where can I get some?"
              description="and dis is a desription jejeeje oj oijiojio  i99kl lkjlk popo poo j io lkj iojkjl opolk l ;lkl k ojo"
              type="danger"
              withBg={false}
              withBorder={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
