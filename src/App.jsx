import { useContext } from "react";
import { AppContext } from "./components/AppContext";

const App = () => {
  const {
    theme,
    toggleTheme,
    user,
    isLoggedIn,
    login,
    logout,
  } = useContext(AppContext);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`px-6 py-4 border-b ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Student<span className="text-blue-500">Hub</span>
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-lg ${
                theme === "dark"
                  ? "bg-gray-700"
                  : "bg-gray-200"
              }`}
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>

            {isLoggedIn ? (
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={login}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-10">

        {!isLoggedIn ? (
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to StudentHub 👋
            </h2>

            <p className="text-gray-500 mb-6">
              Login to see your student dashboard.
            </p>

            <button
              onClick={login}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        ) : (
          <>
            {/* Welcome */}
            <section className="mb-10">
              <p className="text-blue-500 font-medium mb-2">
                Welcome back 👋
              </p>

              <h2 className="text-4xl font-bold mb-2">
                Hello, {user.name}
              </h2>

              <p className="text-gray-500">
                Keep learning and building amazing projects.
              </p>
            </section>

            {/* Profile */}
            <section className="grid md:grid-cols-3 gap-6 mb-8">

              {/* User Card */}
              <div
                className={`p-6 rounded-xl border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="text-5xl mb-4">👨‍💻</div>

                <h3 className="text-2xl font-bold">
                  {user.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {user.course}
                </p>

                <p className="text-gray-500">
                  {user.year}
                </p>
              </div>

              {/* React */}
              <div
                className={`p-6 rounded-xl border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <p className="text-gray-500 mb-2">
                  Current Focus
                </p>

                <h3 className="text-2xl font-bold mb-4">
                  React
                </h3>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-[75%]"></div>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  75% completed
                </p>
              </div>

              {/* Projects */}
              <div
                className={`p-6 rounded-xl border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <p className="text-gray-500 mb-2">
                  Projects
                </p>

                <h3 className="text-4xl font-bold">
                  4
                </h3>

                <p className="text-gray-500 mt-2">
                  Projects completed
                </p>
              </div>
            </section>

            {/* Skills */}
            <section
              className={`p-6 rounded-xl border ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold mb-5">
                My Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Learning */}
            <section className="mt-8">
              <h3 className="text-2xl font-bold mb-5">
                Learning Progress
              </h3>

              <div className="grid md:grid-cols-3 gap-5">

                <Progress
                  title="JavaScript"
                  progress="80%"
                  theme={theme}
                />

                <Progress
                  title="React"
                  progress="75%"
                  theme={theme}
                />

                <Progress
                  title="Node.js"
                  progress="20%"
                  theme={theme}
                />

              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

const Progress = ({ title, progress, theme }) => {
  return (
    <div
      className={`p-5 rounded-xl border ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex justify-between mb-3">
        <span className="font-medium">{title}</span>

        <span className="text-gray-500">
          {progress}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
};

export default App;