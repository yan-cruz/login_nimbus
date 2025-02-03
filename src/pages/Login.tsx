import { Button, Box, Card, Text, Alert, Link, Input, Checkbox } from "@nimbus-ds/components"
import { FormField } from "@nimbus-ds/patterns";

export function Login() {
  return (
    <div id="login">
      <Box
  alignItems="center"
  backgroundColor="neutral-surface"
  display="flex"
  height={{
    md: '100%',
    xs: 'calc(100vh - 61px)'
  }}
  justifyContent="center"
  p="4"
  width="100%"
>
  <Box
    flex="1"
    maxWidth="500px"
  >
    <Card>
      <Card.Header title="Login" />
      <Card.Body>
        <Box
          display="flex"
          flexDirection="column"
          gap="4"
        >
          <Text>
          <span>Não tem uma conta? </span>
            <Link
              appearance="primary"
              textDecoration="none"
            >
              Criar uma
            </Link>
          </Text>
          <Alert
            appearance="danger"
            title="Mensagem de erro"
          >
            Texto do erro
          </Alert>
          <Box
            display="flex"
            flexDirection="column"
            gap="2"
          >
            <FormField.Input label="Email" crossOrigin="" />
            <FormField label="Senha">
              <Input.Password />
            </FormField>
            <Link appearance="primary">
              Esqueceu a senha?
            </Link>
          </Box>
          <Checkbox
            label="Me manter conectado"
            name="keep-login"
          />
        </Box>
      </Card.Body>
      <Card.Footer>
        <Button appearance="primary">
          Entrar
        </Button>
      </Card.Footer>
    </Card>
  </Box>
</Box>
    </div>
  );
}
