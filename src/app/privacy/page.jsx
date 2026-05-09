import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 py-12 px-4">
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-red-800">
            Privacy Policy
          </h1>
          <p className="text-red-800 mt-2 text-sm md:text-base">
            Your privacy is important to us
          </p>
          <p className="text-xs text-red-800 mt-1">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-red-800 leading-7 text-sm md:text-base">

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information such as name, email, phone number,
              and order details when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to process orders, improve our services,
              and provide customer support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              3. Data Protection
            </h2>
            <p>
              Your data is securely stored and we ensure strong protection against
              unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              4. Cookies
            </h2>
            <p>
              We use cookies to enhance your browsing experience and analyze
              website traffic for improvement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We may use trusted third-party services to improve our platform,
              but your data is never sold.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              6. Contact Us
            </h2>
            <p>
              If you have any questions, contact us at{" "}
              <span className="font-medium">
                support@seaside.com
              </span>
            </p>
          </section>

        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="bg-red-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-900 transition duration-300"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;