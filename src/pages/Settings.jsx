import { useState } from "react";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [settings, setSettings] = useState({
    twoFactorAuth: false,
    biometricAuth: false,
    appLock: false,
    transactionAlerts: true,
    promotionalNotifications: false,
    pushNotifications: true,
    emailNotifications: true,
    autoPaySetup: false,
  });

  const toggleSetting = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <div className="page-container">
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Settings</h2>

      {/* Settings Navigation (Moved to Top) */}
      <div style={topNavStyle}>
        <button onClick={() => setActiveSection("profile")} style={buttonStyle}>
          Profile Settings
        </button>
        <button onClick={() => setActiveSection("security")} style={buttonStyle}>
          Security Settings
        </button>
        <button onClick={() => setActiveSection("notifications")} style={buttonStyle}>
          Notifications
        </button>
        <button onClick={() => setActiveSection("payment")} style={buttonStyle}>
          Payment Settings
        </button>
      </div>

      {/* Settings Content */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {activeSection === "profile" && (
          <div>
            <h3>Profile Settings</h3>
            <ul>
              <li>
                <button style={actionButtonStyle}>Edit Profile</button>
              </li>
              <li>
                <button style={actionButtonStyle}>Change Password</button>
              </li>
              <li>
                <label>
                  Two-Factor Authentication
                  <input type="checkbox" checked={settings.twoFactorAuth} onChange={() => toggleSetting("twoFactorAuth")} />
                </label>
              </li>
              <li>
                <label>
                  Language Preferences
                  <select style={dropdownStyle}>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>Telugu</option>
                  </select>
                </label>
              </li>
              <li>
                <label>
                  Currency Settings
                  <select style={dropdownStyle}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>INR</option>
                  </select>
                </label>
              </li>
            </ul>
          </div>
        )}

        {activeSection === "security" && (
          <div>
            <h3>Security Settings</h3>
            <ul>
              <li>
                <label>
                  Biometric Authentication
                  <input type="checkbox" checked={settings.biometricAuth} onChange={() => toggleSetting("biometricAuth")} />
                </label>
              </li>
              <li>
                <label>
                  App Lock
                  <input type="checkbox" checked={settings.appLock} onChange={() => toggleSetting("appLock")} />
                </label>
              </li>
              <li>
                <button style={actionButtonStyle}>Manage Active Devices</button>
              </li>
            </ul>
          </div>
        )}

        {activeSection === "notifications" && (
          <div>
            <h3>Notification Settings</h3>
            <ul>
              <li>
                <label>
                  Transaction Alerts
                  <input type="checkbox" checked={settings.transactionAlerts} onChange={() => toggleSetting("transactionAlerts")} />
                </label>
              </li>
              <li>
                <label>
                  Promotional Notifications
                  <input type="checkbox" checked={settings.promotionalNotifications} onChange={() => toggleSetting("promotionalNotifications")} />
                </label>
              </li>
              <li>
                <label>
                  Push Notifications
                  <input type="checkbox" checked={settings.pushNotifications} onChange={() => toggleSetting("pushNotifications")} />
                </label>
              </li>
              <li>
                <label>
                  Email Notifications
                  <input type="checkbox" checked={settings.emailNotifications} onChange={() => toggleSetting("emailNotifications")} />
                </label>
              </li>
            </ul>
          </div>
        )}

        {activeSection === "payment" && (
          <div>
            <h3>Payment Settings</h3>
            <ul>
              <li>
                <button style={actionButtonStyle}>Manage Linked Accounts</button>
              </li>
              <li>
                <button style={actionButtonStyle}>Manage Payment Methods</button>
              </li>
              <li>
                <label>
                  Transaction Limit
                  <select style={dropdownStyle}>
                    <option>$500</option>
                    <option>$1000</option>
                    <option>$5000</option>
                  </select>
                </label>
              </li>
              <li>
                <label>
                  Auto-Pay Setup
                  <input type="checkbox" checked={settings.autoPaySetup} onChange={() => toggleSetting("autoPaySetup")} />
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// 🔹 **Styling**
const topNavStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginTop: "20px",
};

const buttonStyle = {
  padding: "10px 15px",
  border: "none",
  background: "#007bff",
  color: "white",
  cursor: "pointer",
  borderRadius: "5px",
};

const actionButtonStyle = {
  padding: "8px 12px",
  margin: "5px",
  border: "none",
  background: "#28a745",
  color: "white",
  cursor: "pointer",
  borderRadius: "5px",
};

const dropdownStyle = {
  padding: "5px",
  marginLeft: "10px",
  borderRadius: "5px",
};

export default Settings;
