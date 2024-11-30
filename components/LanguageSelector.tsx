import { useState, useEffect, useRef } from 'react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('RU');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Specify type explicitly

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('/en')) {
      setSelectedLanguage('EN');
    } else if (currentPath.includes('/kz')) {
      setSelectedLanguage('KZ');
    } else {
      setSelectedLanguage('RU');
    }
  }, []);

  const handleChange = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    const currentPath = window.location.pathname;
    let newPath = currentPath.replace(/^\/(en|kz)/, '');

    if (newPath === '') {
      newPath = '/';
    }

    if (language === 'EN') {
      newPath = `/en${newPath}`;
    } else if (language === 'KZ') {
      newPath = `/kz${newPath}`;
    }

    setTimeout(() => {
      window.location.href = newPath;
    }, 0);
  };

  const getFlagImage = () => {
    switch (selectedLanguage) {
      case 'RU':
        return '/rus_flag.png';
      case 'EN':
        return '/uk_flag.png';
      case 'KZ':
        return '/kz_flag.png';
      default:
        return '/rus_flag.png';
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-main"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="flex items-center">
            <img
              src={getFlagImage()}
              alt={selectedLanguage}
              className="w-5 h-4 mr-2"
            />
            {selectedLanguage}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleChange('RU')}
              className={`flex items-center w-full px-4 py-2 text-sm ${selectedLanguage === 'RU' ? 'bg-gray-100' : ''}`}
              role="menuitem"
            >
              <img
                src="/rus_flag.png"
                alt="RU"
                className="w-5 h-4 mr-2"
              />
              RU
            </button>
            <button
              onClick={() => handleChange('EN')}
              className={`flex items-center w-full px-4 py-2 text-sm ${selectedLanguage === 'EN' ? 'bg-gray-100' : ''}`}
              role="menuitem"
            >
              <img
                src="/uk_flag.png"
                alt="EN"
                className="w-5 h-4 mr-2"
              />
              EN
            </button>
            <button
              onClick={() => handleChange('KZ')}
              className={`flex items-center w-full px-4 py-2 text-sm ${selectedLanguage === 'KZ' ? 'bg-gray-100' : ''}`}
              role="menuitem"
            >
              <img
                src="/kz_flag.png"
                alt="KZ"
                className="w-5 h-4 mr-2"
              />
              KZ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
