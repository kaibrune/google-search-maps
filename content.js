function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function injectStyles() {
    if (document.getElementById('gsm-styles')) return;
    const style = document.createElement('style');
    style.id = 'gsm-styles';
    style.textContent = `
        @keyframes gsm-in {
            from { opacity: 0; transform: scale(.82); }
            to   { opacity: 1; transform: scale(1); }
        }
        @keyframes gsm-bloom {
            from { clip-path: circle(0%   at 50% 50%); opacity: 0; }
            to   { clip-path: circle(120% at 50% 50%); opacity: 1; }
        }
        .gsm-item {
            animation: gsm-in .38s cubic-bezier(.34, 1.56, .64, 1) forwards;
        }
        .gsm-label {
            display: inline-block;
            animation: gsm-bloom .3s cubic-bezier(.22, 1, .36, 1) forwards;
        }
    `;
    document.head.appendChild(style);
}

function makeMapsItem(mapsHref) {
    const listItem = document.createElement('div');
    listItem.setAttribute('role', 'listitem');
    listItem.className = 'gsm-item';

    const link = document.createElement('a');
    link.className = 'C6AK7c';
    link.href = mapsHref;

    const outerDiv = document.createElement('div');
    outerDiv.className = 'mXwfNd';

    const innerDiv = document.createElement('div');
    innerDiv.className = 'mVH5Fc';

    const span = document.createElement('span');
    span.className = 'R1QWuf gsm-label';
    span.textContent = 'Maps';

    innerDiv.appendChild(span);
    outerDiv.appendChild(innerDiv);
    link.appendChild(outerDiv);
    listItem.appendChild(link);

    return listItem;
}

function insertMapsLink() {
    const query = getParameterByName('q') || '';
    const domain = window.location.hostname.replace('www.', '');
    const mapsHref = 'https://' + domain + '/maps?q=' + encodeURIComponent(query);

    const navBar = document.querySelector('div.rQTE8b > div[role="list"]');
    if (!navBar) return false;
    if (navBar.querySelector('a[href*="/maps"]')) return true;

    injectStyles();

    const listItem = makeMapsItem(mapsHref);
    if (navBar.children.length >= 4) {
        navBar.insertBefore(listItem, navBar.children[3]);
    } else {
        navBar.appendChild(listItem);
    }

    const moreController = document.querySelector('div[jscontroller="eBYPP"]');
    if (moreController) {
        const slot = moreController.querySelector('div[jsname="ibnC6b"]');
        if (slot && !slot.querySelector('a[href*="/maps"]')) {
            slot.appendChild(makeMapsItem(mapsHref));
        }
    }

    return true;
}

if (!insertMapsLink()) {
    const observer = new MutationObserver(() => {
        if (insertMapsLink()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
}
