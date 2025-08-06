import React from 'react';
import html2canvas from 'html2canvas';


class Preview extends React.Component {
  downloadImage = () => {
    const note = document.getElementById('note');
    if (note) {
      html2canvas(note, { useCORS: true }).then(canvas => {
        const data = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = data;
        link.download = 'note.png';
        link.click();
      });
    } else {
      console.error('Note not found');
    }
  };

  render() {
    const { style, body } = this.props;

    return (
      <>
        <div
          id="note"
          className="preview-container"
          style={{
            ...this.props.style,
            padding: '20px',
            minHeight: '300px',
        
            
          }}
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <div className="d-flex justify-content-center bd-highlight" style={{ padding: "20px" }}>
          <button className="btn btn-info mt-2" id="download-btn" onClick={this.downloadImage}>Download</button>
        </div>
      </>
    );
  }
}

export default Preview;
