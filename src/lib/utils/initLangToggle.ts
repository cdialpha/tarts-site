export function initLanguageToggle(currentLang: "en" | "fr") {
  const path = window.location.pathname;
  const isInitPathFrench = path.startsWith("/fr/");
  const isBrowserFrench = navigator.language.toLowerCase().startsWith("fr");
  const pathPrefix = isBrowserFrench ? "/fr" : ""; 
 
  /* Example Test Cases:
  A french browser, gets any French page / do nothing 
  A Non-French Browser, gets index page / do nothing 
  A Non-French Browser, gets any french Page // do nothing,  
  A french browser, gets any page (default non-French) // redirect 
  */ 

  // Feature TODO - if french, ask client if they want to redirect to english.

  /* TODO 
  This will redirect ANY English page, including:
    /about  → /fr//about
    /resources → /fr//resources
    But your intent is likely:
    Redirect only the root English pages (i.e. ones without /fr already)
    NOT redirect /en (you don’t even use /en)
    NOT redirect every English subpage
    This logic currently forces French everywhere.
  */

    if (!isInitPathFrench && isBrowserFrench && currentLang === "en" ) {
      window.location.replace(`/fr/${path}`)
       return; //end here, no need to set listener on redirect  
} 
  
// Add listener to toggle select element in navbar
 
  const selectEl = document.getElementById("lang-select") as HTMLSelectElement | null;
  if (!selectEl) return;
  // Add an event listener , on change, sees if option is same as current lang
  selectEl.addEventListener("change", (e: Event) => {
    const target = e.target as HTMLSelectElement;
    const lang = target.value; // "" or "fr"
    const current = window.location.pathname;
    const isCurrentFrench = current === "/fr" || current.startsWith("/fr/");

    //  If selected value is french and current page is not french, redirect to french page
      
    // English → French
    if (lang === "fr" && !isCurrentFrench) {
      const newPath = `/fr${current === "/" ? "/" : current}`;
      window.location.href = newPath;
      return;
    }
  
    // French → English
    if (lang === "en" && isCurrentFrench) {
      
      const newPath = current.replace(/^\/fr/, "");
      window.location.href = newPath || "/";
      return;
    }
  });   
}
