$(document).ready(function() {
  function generateAPACitation() {
    const author = $('#author').val().trim();
    const title = $('#title').val().trim();
    const publisher = $('#publisher').val().trim();
    const year = $('#year').val().trim();
    const url = $('#url').val().trim();
    const doi = $('#doi').val().trim();
    const accessDate = $('#accessDate').val().trim();
    const isbn = $('#isbn').val().trim();
    const edition = $('#edition').val().trim();
    const city = $('#city').val().trim();
    const issue = $('#issue').val().trim();
    const pages = $('#pages').val().trim();
    const database = $('#database').val().trim();
    const contributors = $('#contributors').val().trim();
    const series = $('#series').val().trim();
    const format = $('#format').val().trim();

    let citation = '';

    if (author) {
      citation += `${author}. `;
    }
    if (year) {
      citation += `(${year}). `;
    }
    if (title) {
      citation += `${title}. `;
    }
    if (publisher) {
      citation += `${publisher}. `;
    }
    if (url) {
      citation += `${url}. `;
    } else if (doi) {
      citation += `https://doi.org/${doi}. `;
    }
    if (accessDate) {
      citation += `Accessed ${accessDate}. `;
    }
    if (isbn) {
      citation += `ISBN: ${isbn}. `;
    }
    if (edition) {
      citation += `${edition}. `;
    }
    if (city) {
      citation += `${city}. `;
    }
    if (issue) {
      citation += `Issue ${issue}. `;
    }
    if (pages) {
      citation += `${pages}. `;
    }
    if (database) {
      citation += `${database}. `;
    }
    if (contributors) {
      citation += `${contributors}. `;
    }
    if (series) {
      citation += `${series}. `;
    }
    if (format) {
      citation += `${format}.`;
    }

    $('#apa-output').text(citation);
  }

  function generateMLACitation() {
    const author = $('#author').val().trim();
    const title = $('#title').val().trim();
    const publisher = $('#publisher').val().trim();
    const year = $('#year').val().trim();
    const url = $('#url').val().trim();
    const accessDate = $('#accessDate').val().trim();
    const isbn = $('#isbn').val().trim();
    const database = $('#database').val().trim();
    const contributors = $('#contributors').val().trim();
    const series = $('#series').val().trim();

    let citation = '';

    if (author) {
      citation += `${author}. `;
    }
    if (title) {
      citation += `"${title}." `;
    }
    if (publisher) {
      citation += `${publisher}, `;
    }
    if (year) {
      citation += `${year}. `;
    }
    // Medium
    citation += `Web. `;
    if (accessDate && url) {
      citation += `${accessDate}. <${url}>. `;
    }
    if (contributors) {
      citation += `${contributors}. `;
    }
    if (database) {
      citation += `${database}. `;
    }
    if (series) {
      citation += `${series}.`;
    }

    $('#mla-output').text(citation);
  }

  function generateChicagoCitation() {
    const author = $('#author').val().trim();
    const title = $('#title').val().trim();
    const publisher = $('#publisher').val().trim();
    const year = $('#year').val().trim();
    const url = $('#url').val().trim();
    const accessDate = $('#accessDate').val().trim();

    let citation = '';

    if (author) {
      citation += `${author}. `;
    }
    if (title) {
      citation += `"${title}." `;
    }
    if (publisher) {
      citation += `${publisher}, `;
    }
    if (year) {
      citation += `${year}. `;
    }
    if (accessDate && url) {
      citation += `Accessed ${accessDate}. ${url}.`;
    }

    $('#chicago-output').text(citation);
  }

  // Attach event listeners for real-time updates
  $('#author, #title, #publisher, #year, #url, #doi, #accessDate, #isbn, #edition, #city, #issue, #pages, #database, #contributors, #series, #format').on('input', function() {
    generateAPACitation();
    generateMLACitation();
    generateChicagoCitation();
  });
});