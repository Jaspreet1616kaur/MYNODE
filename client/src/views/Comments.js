// import React from "react";

// function Comments() {
//   const [updatedComments, setUpdatedComments] = useState(null);
//   const token = getToken();
//   if (token) {
//     const myHeaders = new Headers();
//     myHeaders.append("Authorization", `Bearer ${token}`);

//     const handleChangeHandler = (e) => {
//       setUpdatedComments({
//         ...updatedComments,
//         [e.target.name]: e.target.value,
//       });
//     };
//     const updatedComments = async (e) => {
//       console.log("updatedComments", updatedComments);
//       console.log("item._id", item._id);
//       e.preventDefault();
//       let urlencoded = new URLSearchParams();
//       urlencoded.append("userName", updatedComments.userName);
//       urlencoded.append("id", item._id);
//       urlencoded.append("avatarPicture", updatedComments.avatarPicture);
//       urlencoded.append("commentText", updatedComments.commentText);

//       var requestOptions = {
//         method: "POST",
//         body: urlencoded,
//       };
//       console.log("requestOptions.body", requestOptions.body);
//       try {
//         const response = await fetch(
//           "http://localhost:5001/api/comments",
//           requestOptions
//         );
//         const results = await response.json();
//         // console.log("results", results);
//       } catch (error) {
//         console.log("error fetching", error);
//       }
//     };
//   }

//   console.log("updatedComments: ", updatedComments);

//   return (
//     <div>
//       <form onSubmit={updatedComments}>
//         <label htmlFor="updatedComments">
//           <p>updatedComments</p>
//         </label>
//         <input
//           type="text"
//           placeholder="commentsText "
//           value={
//             updatedComments?.commentsText ? updatedComments.commentsText : ""
//           }
//           onChange={handleChangeHandler}
//           name="commentsText"
//         />
//         <button type="updatedComments"> submit</button>
//       </form>
//     </div>
//   );
// }

// export default Comments;
