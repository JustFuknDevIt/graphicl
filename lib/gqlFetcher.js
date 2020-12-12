const gqlFetcher = async (query, variables) => {
	const { data, errors } = await fetch(`${BASE_URL}/api/graphql`, {
		method: "post",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ query, variables }),
	}).then((r) => r.json());
	if (errors) throw errors;
	return data;
};

export default gqlFetcher;
