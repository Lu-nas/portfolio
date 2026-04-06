const Apresentacao = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
          Apresentação
        </h2>

        <p className="text-lg text-muted-foreground mb-10">
          Este vídeo apresenta parte da minha trajetória de transição de carreira e evolução na área de tecnologia, com foco em desenvolvimento backend e construção de soluções reais.
        </p>

        <div className="w-full max-w-2xl mx-auto aspect-video shadow-lg rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/tkhAjyYVUKM"
            title="Apresentação Luana"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Apresentacao;
