// rest endpoint
const restEndPoint = process.env.rest_hellforge_url as string;
export async function getAllUniques() {
	try {
		const res = await fetch(restEndPoint);

		if (!res.ok) {
			throw new Error(`Error fetching data: ${res.statusText}`);
		}

		const data = await res.json();

		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
}

export async function getUniques(id: string) {
	try {
		const res = await fetch(`${restEndPoint}/${id}`);

		if (!res.ok) {
			throw new Error(`Error fetching data: ${res.statusText}`);
		}

		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
}
