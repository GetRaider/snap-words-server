import { NestFactory } from "@nestjs/core";

import { AppModule } from "@modules/app.module";
import { HttpExceptionFilter } from "@helpers/httpExceptionFilter.helper";
import { Logger } from "@nestjs/common";

void (async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 8090;

    app.useGlobalFilters(new HttpExceptionFilter(new Logger()));
    await app.listen(port, () =>
      console.info(`Server has started on the ${port} port`),
    );
  } catch (error) {
    console.error(`Server has not started due to: ${error.message}`);
  }
})();
