export default function Hero() {
  return (
    <section className="relative md:-mt-[76px] not-prose">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div className="py-12 md:py-20">
          <div className="pb-10 md:pb-16 max-w-5xl">
            {title && (
              <h1
                className="text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading text-gray-200"
                set:html={title}
              />
            )}
            <div className="max-w-3xl">
              {subtitle && (
                <p
                  className="text-xl text-white mb-6 dark:text-slate-300"
                  set:html={subtitle}
                />
              )}
              {actions && (
                <div className="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4">
                  {Array.isArray(actions) ? (
                    actions.map((action) => (
                      <div className="flex w-full sm:w-auto">
                        <Button
                          {...(action || {})}
                          className="w-full sm:mb-0"
                        />
                      </div>
                    ))
                  ) : (
                    <Fragment set:html={actions} />
                  )}
                </div>
              )}
            </div>
            {content && <Fragment set:html={content} />}
          </div>
        </div>
      </div>
    </section>
  );
}
