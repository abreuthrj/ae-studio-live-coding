import { MdStar } from "react-icons/md";

export type ProfileProps = {
  image: string;
  startCount: number;
};

export default function Profile(props: ProfileProps) {
  const it = Array(props.startCount).fill(true);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-full overflow-hidden shadow-lg">
        <img src={props.image} width={128} height={128} />
      </div>

      <div className="flex items-center justify-center gap-2">
        {it.map(() => (
          <MdStar />
        ))}
      </div>
    </div>
  );
}
