function getParameterByName(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function insertMapsLink() {
  const navBar = document.querySelector('div[role="navigation"] div[role="list"]');
  if (!navBar) {
    return;
  }

  const query = getParameterByName('q') || '';
  const domain = window.location.hostname.replace('www.', '');

  const listItem = document.createElement('div');
  listItem.setAttribute('role', 'listitem');
  listItem.setAttribute('data-hveid', 'CDQQAA');
  listItem.setAttribute('data-ved', '2ahUKEwiFakeVedValue');

  const link = document.createElement('a');
  link.className = 'LatpMc nPDzT T3FoJb';
  link.setAttribute('role', 'link');
  link.setAttribute('data-hveid', 'CDQQAQ');
  link.setAttribute('data-ved', '2ahUKEwiFakeVedValue');

  link.href = 'https://' + domain + '/maps?q=' + encodeURIComponent(query);

  const innerDiv = document.createElement('div');
  innerDiv.setAttribute('jsname', 'bVqjv');
  innerDiv.className = 'YmvwI';
  innerDiv.textContent = 'Maps';

  link.appendChild(innerDiv);
  listItem.appendChild(link);

  if (navBar.children.length >= 2) {
    navBar.insertBefore(listItem, navBar.children[3]);
  } else {
    navBar.appendChild(listItem);
  }
}

insertMapsLink();
