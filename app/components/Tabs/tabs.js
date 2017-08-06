function openTab(evt, tabName, tabcontentClass, tablinksClass) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName(tabcontentClass);
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName(tablinksClass);
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
document.getElementById("tablink-city-open").click();
