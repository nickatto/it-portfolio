// Opens and closes the contact section on each page.
function toggleContact() {
  const panel = document.getElementById("contact-panel");
  const isOpening = !panel.classList.contains("open");

  panel.classList.toggle("open");
  panel.setAttribute("aria-hidden", isOpening ? "false" : "true");

  if (isOpening) {
    panel.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// Changes the troubleshooting steps when a different issue is selected.
const supportIssues = {
  login: {
    title: "User cannot sign in",
    steps: [
      "Confirm the username and ask what error message appears.",
      "Check whether the account is locked, disabled, or using an expired password.",
      "Verify network or VPN access if the user is working remotely.",
      "Reset or unlock the account when authorized, then test the login.",
      "Document the cause, actions taken, and final result in the ticket."
    ]
  },
  internet: {
    title: "Computer has no internet connection",
    steps: [
      "Find out whether the problem affects one user or multiple users.",
      "Check the cable, Wi-Fi connection, airplane mode, and network adapter status.",
      "Use ipconfig and ping to check the IP address, gateway, and connectivity.",
      "Test DNS separately by comparing an IP address test with a website-name test.",
      "Apply the correct fix, confirm access, and record the resolution."
    ]
  },
  outlook: {
    title: "Outlook is not syncing",
    steps: [
      "Confirm internet access and check whether Outlook reports that it is offline.",
      "Test the account through Outlook on the web to narrow down the issue.",
      "Check credentials, mailbox storage, add-ins, and the local Outlook profile.",
      "Restart, repair, or recreate the profile only after the simpler checks.",
      "Verify new mail is sending and receiving before closing the ticket."
    ]
  },
  vpn: {
    title: "VPN will not connect",
    steps: [
      "Confirm that the user's normal internet connection is working first.",
      "Review the exact VPN error and verify the server address and credentials.",
      "Check password expiration, MFA, time settings, and required VPN software.",
      "Restart the client or network adapter and test again.",
      "Escalate with logs and clear notes if the issue requires network administration."
    ]
  },
  slow: {
    title: "Computer is running slowly",
    steps: [
      "Ask when the slowdown started and whether it affects one program or the whole computer.",
      "Review Task Manager for high CPU, memory, disk, or startup usage.",
      "Check available storage, pending updates, malware alerts, and recent changes.",
      "Remove unnecessary startup items or repair the affected application when appropriate.",
      "Retest performance with the user and document the result."
    ]
  }
};

function showIssue(issueName, selectedButton) {
  const issue = supportIssues[issueName];
  const title = document.getElementById("issue-title");
  const steps = document.getElementById("issue-steps");

  if (!issue || !title || !steps) {
    return;
  }

  document.querySelectorAll(".issue-button").forEach((button) => {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");
  title.textContent = issue.title;
  steps.innerHTML = issue.steps.map((step) => `<li>${step}</li>`).join("");
}
