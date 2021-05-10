import Card from "../components/Card";

export default function Home() {
	return (
		<div className="container">
      <Card />
		</div>
	);
}

// export async function getStaticProps() {
//   let { data } = await loadQuick()
//   const quick = data.list
//   return {
//     props: {
//       quick
//     }
//   }
// }
