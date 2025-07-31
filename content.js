function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function insertMapsLink() {
    const query = getParameterByName('q') || '';
    const domain = window.location.hostname.replace('www.', '');
    const mapsHref = 'https://' + domain + '/maps?q=' + encodeURIComponent(query);

    const navBar = document.querySelector('div.rQTE8b > div.beZ0tf.O1uzAe[role="list"]');
    if (navBar) {
        const listItem = document.createElement('div');
        listItem.setAttribute('role', 'listitem');
        listItem.setAttribute('data-hveid', 'CDQQAA');
        listItem.setAttribute('data-ved', '2ahUKEwiFakeVedValue');

        const link = document.createElement('a');
        link.className = 'C6AK7c';
        link.setAttribute('role', 'link');
        link.setAttribute('data-hveid', 'CDQQAQ');
        link.setAttribute('data-ved', '2ahUKEwiFakeVedValue');
        link.href = mapsHref;

        const innerDiv = document.createElement('div');
        innerDiv.className = 'mXwfNd';

        const span = document.createElement('span');
        span.className = 'R1QWuf';
        span.textContent = 'Maps';

        innerDiv.appendChild(span);
        link.appendChild(innerDiv);
        listItem.appendChild(link);

        if (navBar.children.length >= 4) {
            navBar.insertBefore(listItem, navBar.children[3]);
        } else {
            navBar.appendChild(listItem);
        }
    }

    const moreController = document.querySelector('div[jscontroller="eBYPP"]');
    if (moreController) {
        const slot = moreController.querySelector('div[jsname="ibnC6b"]');
        if (slot) {
            const listItem = document.createElement('div');
            listItem.setAttribute('role', 'listitem');
            listItem.setAttribute('data-hveid', 'CDQQAA');
            listItem.setAttribute('data-ved', '2ahUKEwiFakeVedValue');

            const link = document.createElement('a');
            link.className = 'C6AK7c';
            link.setAttribute('role', 'link');
            link.setAttribute('data-hveid', 'CDQQAQ');
            link.setAttribute('data-ved', '2ahUKEwiFakeVedValue');
            link.href = mapsHref;

            const innerDiv = document.createElement('div');
            innerDiv.className = 'mXwfNd';

            const span = document.createElement('span');
            span.className = 'R1QWuf';
            span.textContent = 'Maps';

            innerDiv.appendChild(span);
            link.appendChild(innerDiv);
            listItem.appendChild(link);
            slot.appendChild(listItem);
        }
    }
}

insertMapsLink();
