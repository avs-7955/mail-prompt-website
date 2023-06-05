// import { redirect } from "@sveltejs/kit"

// export const actions = {
// 	default: async ({ cookies, request, locals }) => {
// 		const formData = await request.formData()
// 		console.log(formData)
// 		//Create an object from the form data entries
// 		let formDataObject = Object.fromEntries(formData.entries())
// 		// Format the plain form data as JSON
// 		let formDataJsonString = JSON.stringify(formDataObject)
// 		//Set the fetch options (headers, body)
// 		let fetchOptions = {
// 			//HTTP method set to POST.
// 			method: "POST",
// 			//Set the headers that specify you're sending a JSON body request and accepting JSON response
// 			headers: {
// 				"Content-Type": "application/json",
// 				Accept: "application/json",
// 			},
// 			// POST request body as JSON string.
// 			body: formDataJsonString,
// 		}
// 		const res = await fetch("http://localhost:3000/dashboard", fetchOptions)

// 		//If the response is not ok throw an error (for debugging)
// 		if (!res.ok) {
// 			let error = await res.text()
// 			throw new Error(error)
// 		}
// 		// upon successful file creation, redirecting to the dashboard
// 		throw redirect(302, "./dashboard")
// 	},
// }
