export function Footer() {
  return (
    <footer className="bg-accent-900 text-white mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">DAC</h3>
            <p className="text-gray-300">
              Earn college credits online. Transfer to your university.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/courses" className="hover:text-white">Courses</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">support@dac.edu</p>
            <p className="text-gray-300">1-800-DAC-CREDIT</p>
          </div>
        </div>
        <div className="border-t border-accent-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Degree and Career. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}