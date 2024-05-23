import Qcard from "./Qcard";

export default function Qmenu({ allData: { records } }) {
  return (
    <div className="w-full h-[68vh] mb-[10px] flex justify-center text-center bg-white rounded shadow bg-gradient-to-b from-teal-100 from-20% to-teal-200">
      <div className="w-auto h-full p-0 flex justify-center items-center flex-wrap gap-3 p-5 overflow-x-hidden overflow-y-auto box-border">
        {records.map((value, index) => {
          switch (value.nama) {
            case "Al Fatihah":
              return (
                <Qcard
                  key={`Qcard - ${index}`}
                  data={{ value, index }}
                  color={{
                    background:
                      "bg-gradient-to-b from-0% from-teal-700 to-green-700",
                    shadow: "shadow-green-700",
                    hover: ["shadow-lg", "shadow-green-300"],
                    portrait: ["text-[12px]", "w-[200px]", "h-[150px]"],
                    text: "text-white",
                    boxtitle: "bg-green-500",
                    hr: "bg-green-500",
                  }}
                  br={`${true}`}
                />
              );
            default:
              return <Qcard key={`Qcard - ${index}`} data={{ value, index }} />;
          }
        })}
      </div>
    </div>
  );
}
