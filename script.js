//your JS code here. If required.
const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;

        // Create a message to display
        const message = `You are using ${browserName} (Version: ${browserVersion}).`;

        // Get the browser-info div element
        const browserInfoDiv = document.getElementById('browser-info');

        // Create a new <p> element to hold the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        // Append the message to the browser-info div
        browserInfoDiv.appendChild(messageElement)
