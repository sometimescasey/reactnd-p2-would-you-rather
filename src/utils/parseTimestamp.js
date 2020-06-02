export function parseTimestamp(timestamp) {
		/* attribution:
		https://stackoverflow.com/a/6078873/3700490
		*/

		let a = new Date(timestamp);
		let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		let year = a.getFullYear();
		let month = months[a.getMonth()];
		let date = a.getDate();

		let timeString = date + ' ' + month + ' ' + year;

		return timeString;
}